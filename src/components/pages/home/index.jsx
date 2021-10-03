import React, { Fragment } from 'react'

const Home = () => {
    return (
        <Fragment>

            <section className="w-8/12 lg:w-6/12 flex-1 h-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-r-full shadow-md border-r-2 border-white">

                <div className="flex flex-col items-center justify-center lg:pt-80">
                    <h1 className="text-lg lg:text-6xl font-semibold text-white text-shadow-md uppercase">PROJEÇÃO DE VENDAS</h1>
                    <h1 className="lg:mt-8 text-md lg:text-4xl font-semibold text-white text-shadow-md uppercase">LOJAS SOLAR</h1>
                    <h1 className="mt-2 lg:mt-8 text-xs lg:text-xl font-semibold text-white text-shadow-md uppercase">ATUALIZAÇÃO DE DADOS: 01/10/2021 14:10:06</h1>
                </div>

            </section>

        </Fragment>
    )
}

export default Home
