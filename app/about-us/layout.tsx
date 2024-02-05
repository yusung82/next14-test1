
export const metadata = {
  description: 'next14 test ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div>
          {children}
          <h3> another navi</h3>
        </div>
  )
}
