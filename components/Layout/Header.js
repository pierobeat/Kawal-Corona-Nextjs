import Head from "next/head"
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router"

const Header = (props) => {
    const router = useRouter();
    return(
        <>
            <Head><title>Kawal Covid</title></Head>
            <nav className="main-header navbar navbar-expand navbar-light navbar-white fixed-top border-bottom" style={{backgroundColor:"white"}}>
                <div className="container">
                    <div className="mx-auto hidden-sm-down">
                        <Nav variant="pills" defaultActiveKey={router.pathname=="/" ? "link-0" : "link-1"}>
                            <Nav.Item>
                                <Nav.Link eventKey="link-0" href="/">Global</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="indonesia">Indonesia</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header