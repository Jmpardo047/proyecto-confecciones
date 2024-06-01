import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { ButtonDecorComponent } from './ButtonDecorComponent'
export const RouteButtonComponent = () => {
  return (
    <><div>
        <Link className="link-button" to="/Form">
            <ButtonDecorComponent/>
        </Link>
    </div>

    </>
  )
}

