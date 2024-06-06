import Link from "next/link"
import { FaBoxOpen, FaUser, FaUserTie, FaUsers } from "react-icons/fa";

export default function Component() {
    return (
        <div className="w-full max-w-4xl mx-auto py-12 md:py-20">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cadastros No Geral</h1>
                <p className="text-gray-500 max-w-[600px] mx-auto">
                    Organize seu comercio cadastrando oque precisar..
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <Link href="registrations/product" className="group" prefetch={false}>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 transition-all hover:scale-105 hover:shadow-lg dark:hover:bg-gray-800">
                        <div className="flex items-center justify-center h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                            <FaBoxOpen className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                            Produtos
                        </h3>
                        <div className="h-8">
                            <p className="text-gray-500 dark:text-gray-400">Cadastre seus produtos</p>
                        </div>

                    </div>
                </Link>

                <Link href="#" className="group" prefetch={false}>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 transition-all h-50 hover:scale-105 hover:shadow-lg dark:hover:bg-gray-800">
                        <div className="flex items-center justify-center h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                            <FaUser className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                            Usuario
                        </h3>
                        <div className="h-8">
                            <p className="text-gray-500 dark:text-gray-400">Cadastre um acesso para seus funcionarios.</p>
                        </div>

                    </div>
                </Link>

                <Link href="#" className="group" prefetch={false}>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 transition-all hover:scale-105 hover:shadow-lg dark:hover:bg-gray-800">
                        <div className="flex items-center justify-center h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                            <FaUserTie className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                            Fornecedor
                        </h3>
                        <div className="h-8">
                            <p className="text-gray-500 dark:text-gray-400">Cadastre seus fornecedores.</p>
                        </div>
                    </div>
                </Link>

                <Link href="#" className="group" prefetch={false}>
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 transition-all hover:scale-105 hover:shadow-lg dark:hover:bg-gray-800">
                        <div className="flex items-center justify-center h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                            <FaUsers className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                            Cliente
                        </h3>
                        <div className="h-8">
                            <p className="text-gray-500 dark:text-gray-400">Cadastre seus clientes frequentes.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

function TagIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
    )
}


function TrendingUpIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    )
}


function WalletIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
    )
}