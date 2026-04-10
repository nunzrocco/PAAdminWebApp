import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { StatCard } from "@/components/ui/stat-card"
import { Table, TableBody, TableHead, TableHeader } from "@/components/ui/table"

export const FranchiseGroupPage = () => {
    

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-stone-700">Grupos de Franquicias</h1>
            <div className="flex gap-4 h-40">
                <StatCard title="totales" value={100} className="basis-1/4" />
                <StatCard title="activas" value={80} className="basis-1/4" />
                <StatCard title="inactivas" value={20} className="basis-1/4" />
                <StatCard title="pendientes" value={5} className="basis-1/4" />
            </div>
            <div className="flex gap-4">
                <Card className="basis-2/6">
                    <CardHeader>
                        <CardTitle>Busqueda</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Field className="pb-4 w-full">
                                <FieldLabel htmlFor="name">Nombre</FieldLabel>
                                <Input id="name" type="text" placeholder="Franquicia" />
                            </Field>
                            <Separator />
                            <Field className="pb-4 w-full">
                                <FieldLabel htmlFor="name">Nombre</FieldLabel>
                                <Input id="name" type="text" placeholder="Franquicia" />
                            </Field>
                        </div>
                    </CardContent>
                </Card>
                <Card className="basis-4/6">
                    <CardHeader>
                        <CardTitle>Resultados</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table className="bg-stone-100">
                            <TableHeader>
                                <TableHead>Nombre</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Empresa Propietaria</TableHead>
                                <TableHead>Acciones</TableHead>
                            </TableHeader>
                            <TableBody>
                                
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}   