import Link from "next/link"
export default function Footer() {
    return (
        <div className="Footer">

            <ul className="Footer-buttons">
                <Link href={"https://www.facebook.com/"}><li>Facebook</li></Link>
                <Link href={"https://www.instagram.com/?hl=en"}><li>Instagram</li></Link>
                <Link href={"https://x.com/?logout=1727801622588"}><li>Twitter</li></Link>
            </ul>
        </div>

    )
}
