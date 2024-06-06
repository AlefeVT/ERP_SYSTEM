import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-12">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
          <Button variant="outline">Limpar Carrinho</Button>
        </div>
        <div className="flex-1 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Total</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <img src="/placeholder.svg" alt="Produto" width={64} height={64} className="rounded-md" />
                    <div>
                      <h3 className="font-medium">Arroz Integral</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">1kg</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>R$ 5,99</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <span>2</span>
                    <Button variant="outline" size="icon">
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>R$ 11,98</TableCell>
                <TableCell>
                  <Button variant="outline" size="icon">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <img src="/placeholder.svg" alt="Produto" width={64} height={64} className="rounded-md" />
                    <div>
                      <h3 className="font-medium">Leite Integral</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">1L</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>R$ 4,99</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <span>1</span>
                    <Button variant="outline" size="icon">
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>R$ 4,99</TableCell>
                <TableCell>
                  <Button variant="outline" size="icon">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Caixa</h2>
        </div>
        <div className="flex-1 grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="barcode">Leitor de Código de Barras</Label>
              <Input id="barcode" placeholder="Escaneie o produto" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="total">Total da Compra</Label>
              <div className="text-4xl font-bold">R$ 16,97</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="payment">Método de Pagamento</Label>
              <Select  defaultValue="credit-card">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-card">Cartão</SelectItem>
                  <SelectItem value="debit-card">Dinheiro</SelectItem>
                  <SelectItem value="cash">Fiado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="packing">Embalagem</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="packing" defaultChecked />
                <Label htmlFor="packing">Embalar Compras</Label>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancelar</Button>
            <Button>Finalizar Compra</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MinusIcon(props: any) {
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
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props: any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}