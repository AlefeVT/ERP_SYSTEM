"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
    const [product, setProduct] = useState({
        barcode: "",
        name: "",
        description: "",
        category: "",
        price: 0,
        stock: 0,
    })
    const handleBarcodeRead = () => {
        setProduct({
            ...product,
            barcode: "123456789",
            name: "Produto Exemplo",
            description: "Descrição do produto",
            category: "Categoria A",
            price: 19.99,
            stock: 50,
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log("Produto cadastrado:", product)
    }
    return (
        <div className="container mx-auto px-10 py-8">
            <div className="flex justify-end">
                <Link href={'/app/registrations'} className="bg-primary text-white px-5 py-2 rounded-md">Voltar</Link>
            </div>

            <h1 className="text-2xl font-bold mb-6">Cadastro de Produto</h1>
            <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid grid-cols-2 gap-10">
                    <div className="grid gap-2">
                        <Label htmlFor="barcode">Código de Barras</Label>
                        <div className="flex items-center">
                            <Input
                                id="barcode"
                                value={product.barcode}
                                onChange={(e) => setProduct({ ...product, barcode: e.target.value })}
                                className="flex-1"
                            />
                            <Button onClick={handleBarcodeRead} className="ml-2">
                                Ler Código
                            </Button>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nome do Produto</Label>
                        <Input id="name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="grid gap-2">
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea
                            id="description"
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="category">Categoria</Label>
                        <Input
                            id="category"
                            value={product.category}
                            onChange={(e) => setProduct({ ...product, category: e.target.value })}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="grid gap-2">
                        <Label htmlFor="price">Preço</Label>
                        <Input
                            id="price"
                            type="number"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="stock">Quantidade em Estoque</Label>
                        <Input
                            id="stock"
                            type="number"
                            value={product.stock}
                            onChange={(e) => setProduct({ ...product, stock: parseInt(e.target.value) })}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Cadastrar Produto</Button>
                </div>
            </form>
            <div className="mt-12 mb-20">
                <h2 className="text-xl font-bold mb-4">Visualização do Produto</h2>
                <Card>
                    <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Código de Barras:</p>
                                <p>{product.barcode}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Categoria:</p>
                                <p>{product.category}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Preço:</p>
                                <p>${product.price.toFixed(2)}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Estoque:</p>
                                <p>{product.stock} unidades</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}