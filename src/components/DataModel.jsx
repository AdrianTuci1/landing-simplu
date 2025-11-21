import DataModelDiagram from "./ui/data-model-diagram";

const DataModel = () => {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Data Model
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Understand how Simplu structures and manages your business data.
                        Our flexible schema adapts to your specific industry needs.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-border bg-muted/30">
                        <h2 className="text-lg font-semibold">Entity Relationships</h2>
                        <p className="text-sm text-muted-foreground">
                            Interactive diagram showing connections between core entities.
                        </p>
                    </div>
                    <DataModelDiagram />
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Core Entities</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                <div>
                                    <strong className="block text-foreground">Customers</strong>
                                    <span className="text-muted-foreground">Central to the system, storing all personal and behavioral data.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                <div>
                                    <strong className="block text-foreground">Appointments</strong>
                                    <span className="text-muted-foreground">Linked to customers and resources, managing time and availability.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                <div>
                                    <strong className="block text-foreground">Resources</strong>
                                    <span className="text-muted-foreground">Staff, rooms, or equipment required for services.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Extensibility</h3>
                        <p className="text-muted-foreground mb-6">
                            Simplu allows you to define custom fields and relationships to match your unique business logic.
                            Whether you need to track medical history, fitness goals, or room preferences, our data model scales with you.
                        </p>
                        <div className="bg-muted/50 rounded-lg p-6 border border-border">
                            <h4 className="font-medium mb-2">API Access</h4>
                            <p className="text-sm text-muted-foreground">
                                All data entities are accessible via our REST and GraphQL APIs, ensuring seamless integration with your existing stack.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataModel;
