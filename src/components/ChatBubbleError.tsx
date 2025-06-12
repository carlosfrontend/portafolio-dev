
import Image from "next/image"
import ProfilePicture from "@/assets/images/profile_picture.webp"
export default function ChatBubbleError(error: { message: string }) {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar avatar-online">
                <div className="w-10 rounded-full">
                    <Image
                        className="rounded-full"
                        width={40}
                        height={40}
                        alt="Tailwind CSS chat bubble component"
                        src={ProfilePicture}
                    />
                </div>
            </div>
            <div className="chat-bubble">Oops! Algo ha salido mal <br />Vuelve a intentarlo dentro de unos minutos: {error.message}</div>
        </div>

    )
}

