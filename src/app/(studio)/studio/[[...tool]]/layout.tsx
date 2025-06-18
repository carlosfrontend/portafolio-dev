
export default function SanityLayout({ children }: { children: React.ReactNode }) {

    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}