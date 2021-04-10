import "tailwindcss/tailwind.css"

export function Layout(props) {
  return <div className="container mx-auto">{props.children}</div>
}
