import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { ButtonDecorComponent } from './ButtonDecorComponent'
import { HomeButtonComponent } from './HomeButtonComponent'
export const RouteButtonComponent = () => {
  return (
    <><div>
        <Link className="link-button" to="/Form">
            <HomeButtonComponent/>
        </Link>
    </div>

    </>
  )
}

