import React, { Fragment } from 'react'
import { NavBar } from '../../common'

const Header = () => {
    return (
        <Fragment>
            <div className="flex px-4 w-full bg-solar-blue-200 border-b-2 border-gray-100">
                <NavBar />
                <div className="flex flex-auto items-center justify-end">
                    <span className="text-2xl uppercase text-white font-bold text-shadow">Acompanhamento de vendas</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
