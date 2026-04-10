import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SummaryItem } from "@/components/ui/summary-item";
import { Separator } from "@radix-ui/react-separator";

export const PartnersDashboardPage = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Resumen
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <div className="flex w-full items-start justify-between gap-4 px-4">
                            <SummaryItem description="Socios" value={456}></SummaryItem>
                            <Separator orientation="vertical" />
                            <SummaryItem description="Servicios Activos" value={456}></SummaryItem>
                            <Separator orientation="vertical" />
                            <SummaryItem description="Servicios Vencidos" value={456}></SummaryItem>
                            <Separator orientation="vertical" />
                            <SummaryItem description="Recintos" value={456}></SummaryItem>
                            <Separator orientation="vertical" />
                            <SummaryItem description="Canchas" value={456}></SummaryItem>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>Evaluaciones Socios</CardHeader>
                </Card>
            </div >
            <div className="grid grid-cols-3 pt-4 gap-4">
                <Card>

                </Card>
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Socios</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4">
                            <Field>
                                <FieldLabel htmlFor="partner-name">Nombre</FieldLabel>
                                <Input id="partner-name" type="text" placeholder="abc..." />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="partner-name">Nombre</FieldLabel>
                                <Input id="partner-name" type="text" placeholder="abc..." />
                            </Field>
                            <Button>Buscar</Button>

                        </div>

                    </CardContent>
                </Card>
            </div>
        </>
    );
}