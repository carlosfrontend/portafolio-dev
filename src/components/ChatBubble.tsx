
import Image from "next/image"
import ProfilePicture from "@/assets/images/profile_picture.webp"
import { ReactNode } from "react";

export default function ChatBubble({ children }: { children: ReactNode }) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar avatar-online">
        <div className="w-10 rounded-full">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            alt="Burbuja de notificación de chat para avisar de que el correo ha sido copiado correctamente"
            src={ProfilePicture}
          />
        </div>
      </div>
      <div className="chat-bubble">
        {children}
      </div>
    </div>

  )
}

