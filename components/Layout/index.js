import "tailwindcss/tailwind.css"

export function Layout(props) {
  return <div className="container mx-auto px-2 py-8">{props.children}</div>
}
