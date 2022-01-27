import Link from "next/link";
import useAuth from "../hooks/useAuth";

export default function Nav() {
    const { loggedIn } = useAuth();
    return (<nav>
      <ul className="nav">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {!loggedIn ? (<>
            <li>
              <Link href="/log-in">
                <a>Log In</a>
              </Link>
            </li>
            <li>
              <Link href="/sign-up">
                <a>Sign Up</a>
              </Link>
            </li>
          </>) : (<>
            <li>
              <Link href="/payment-methods">
                <a>Payment Methods</a>
              </Link>
            </li>
            <li>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/log-out">
                <a>Log Out</a>
              </Link>
            </li>
          </>)}
      </ul>
    </nav>);
}
