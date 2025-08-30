import { useAppContext } from "@/context/AppContext"
import { useSocket } from "@/context/SocketContext"
import { SocketEvent } from "@/types/socket"
import { USER_STATUS } from "@/types/user"
import { ChangeEvent, FormEvent, useEffect, useRef } from "react"
import { toast } from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import logo from "@/assets/logo.svg"
import ModernButton from "@/components/common/ModernButton"
import ModernCard from "@/components/common/ModernCard"
import ModernInput from "@/components/common/ModernInput"

const FormComponent = () => {
    const location = useLocation()
    const { currentUser, setCurrentUser, status, setStatus } = useAppContext()
    const { socket } = useSocket()

    const usernameRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    const createNewRoomId = () => {
        setCurrentUser({ ...currentUser, roomId: uuidv4() })
        toast.success("Created a new Room Id")
        usernameRef.current?.focus()
    }

    const handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setCurrentUser({ ...currentUser, [name]: value })
    }

    const validateForm = () => {
        if (currentUser.username.trim().length === 0) {
            toast.error("Enter your username")
            return false
        } else if (currentUser.roomId.trim().length === 0) {
            toast.error("Enter a room id")
            return false
        } else if (currentUser.roomId.trim().length < 5) {
            toast.error("ROOM Id must be at least 5 characters long")
            return false
        } else if (currentUser.username.trim().length < 3) {
            toast.error("Username must be at least 3 characters long")
            return false
        }
        return true
    }

    const joinRoom = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (status === USER_STATUS.ATTEMPTING_JOIN) return
        if (!validateForm()) return
        toast.loading("Joining room...")
        setStatus(USER_STATUS.ATTEMPTING_JOIN)
        socket.emit(SocketEvent.JOIN_REQUEST, currentUser)
    }

    useEffect(() => {
        if (currentUser.roomId.length > 0) return
        if (location.state?.roomId) {
            setCurrentUser({ ...currentUser, roomId: location.state.roomId })
            if (currentUser.username.length === 0) {
                toast.success("Enter your username")
            }
        }
    }, [currentUser, location.state?.roomId, setCurrentUser])

    useEffect(() => {
        if (status === USER_STATUS.DISCONNECTED && !socket.connected) {
            socket.connect()
            return
        }

        const isRedirect = sessionStorage.getItem("redirect") || false

        if (status === USER_STATUS.JOINED && !isRedirect) {
            const username = currentUser.username
            sessionStorage.setItem("redirect", "true")
            navigate(`/editor/${currentUser.roomId}`, {
                state: {
                    username,
                },
            })
        } else if (status === USER_STATUS.JOINED && isRedirect) {
            sessionStorage.removeItem("redirect")
            setStatus(USER_STATUS.DISCONNECTED)
            socket.disconnect()
            socket.connect()
        }
    }, [currentUser, location.state?.redirect, navigate, setStatus, socket, status])

    return (
        <div className="w-full max-w-md space-y-6">
            {/* Minimalist Header */}
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-white">Join a Room</h2>
                <p className="text-gray-400 text-sm">Enter your details to start collaborating</p>
            </div>
            
            {/* Modern Form */}
            <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 space-y-5">
                <form onSubmit={joinRoom} className="space-y-5">
                    {/* Room ID Input */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Room ID</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="roomId"
                                placeholder="Enter room ID"
                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                onChange={handleInputChanges}
                                value={currentUser.roomId}
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                🏠
                            </div>
                        </div>
                    </div>

                    {/* Username Input */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Username</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                                onChange={handleInputChanges}
                                value={currentUser.username}
                                ref={usernameRef}
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                👤
                            </div>
                        </div>
                    </div>

                    {/* Join Button */}
                    <button
                        type="submit"
                        disabled={status === USER_STATUS.ATTEMPTING_JOIN}
                        className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {status === USER_STATUS.ATTEMPTING_JOIN ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Joining...</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center space-x-2">
                                <span>🚀</span>
                                <span>Join Room</span>
                            </div>
                        )}
                    </button>
                </form>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700/50"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-800/30 text-gray-400">or</span>
                    </div>
                </div>

                {/* Generate Room Button */}
                <button
                    type="button"
                    onClick={createNewRoomId}
                    className="w-full py-2 px-4 text-sm text-gray-300 hover:text-white border border-gray-600/50 hover:border-gray-500 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                    <div className="flex items-center justify-center space-x-2">
                        <span>✨</span>
                        <span>Generate New Room ID</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FormComponent
