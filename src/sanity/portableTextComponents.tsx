import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const components: PortableTextComponents = {
    types: {
        image: (props) =>
            props.value ? (
                <Image
                    className="rounded-lg not-prose w-full h-auto"
                    src={urlFor(props.value)
                        .width(600)
                        .height(400)
                        .quality(80)
                        .auto("format")
                        .url()}
                    alt={props?.value?.alt || ""}
                    width="600"
                    height="400"
                    priority={false}
                />
            ) : null,
        code: ({ value }) => {
            return (
                <div className="not-prose my-6">
                    {value.filename && (
                        <div className="bg-ghost px-4 py-1 text-sm font-mono text-base-content border-b border-gray-700">
                            {value.filename}
                        </div>
                    )}
                    <SyntaxHighlighter
                        language={value.language || 'javascript'}
                        style={oneDark}
                        wrapLongLines
                        customStyle={{
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            fontSize: '0.875rem',
                        }}
                    >
                        {value.code}
                    </SyntaxHighlighter>
                </div>
            );
        },
    },
    marks: {
        link: ({ children, value }) => {
            const { href, blank } = value;
            return (
                <a
                    href={href}
                    target={blank ? "_blank" : "_self"}
                    rel={blank ? "noopener noreferrer" : undefined}
                    className="text-blue-500 underline hover:text-blue-700"
                >
                    {children}
                </a>
            );
        },
    },
};