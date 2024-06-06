import Link from "next/link"
import { FaBoxOpen } from "react-icons/fa";
import { GoTag } from "react-icons/go";

export default function Component() {
    return (
        <div className="w-full max-w-4xl mx-auto py-12 md:py-20">

            <div className="flex justify-end">
                <Link href={'/app/registrations'} className="bg-primary text-white px-5 py-2 rounded-md">Voltar</Link>
            </div>

            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cadastros De Produtos</h1>
                <p className="text-gray-500 max-w-[600px] mx-auto">
                    Organize seus produtos com facilidade. Cadastre seus produtos, categorias e investimentos.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <Link href="/app/registrations/product/n" className="group" prefetch={false}>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 transition-all hover:scale-105 hover:shadow-lg dark:hover:bg-gray-800">
                        <div className="flex items-center justify-center h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                            <FaBoxOpen className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                            Novo Produto
                        </h3>
                        <div className="h-8">
                            <p className="text-gray-500 dark:text-gray-400">Cadastre seus produtos</p>
                        </div>

                    </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 transition-all h-50 hover:scale-105 hover:shadow-lg dark:hover:bg-gray-800">
                        <div className="flex items-center justify-center h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                            <GoTag className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                            Categorias
                        </h3>
                        <div className="h-8">
                            <p className="text-gray-500 dark:text-gray-400">Cadastre as categorias dos produtos.</p>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    )
}