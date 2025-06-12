
import Image from "next/image"
import ProfilePicture from "@/assets/images/profile_picture.webp"
export default function ChatBubble() {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
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
      <div className="chat-bubble">Gracias por copiar mi email!. <br />Ahora puedes pegarlo en en tu cliente de correo electrónico para mandarme un mensaje.</div>
    </div>

  )
}

