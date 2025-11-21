import React from 'react';
import { Footer } from '@/components/blocks/footer';
import { Mail, FileText, Users, Settings, HelpCircle } from "lucide-react";

const ReportingPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-grow pt-24 px-6">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                        Reporting
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mb-12">
                        Gain insights into your business performance with detailed reports.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl border bg-card text-card-foreground shadow-sm">
                            <h3 className="font-semibold text-xl mb-4">Financial Overview</h3>
                            <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center text-muted-foreground">
                                Chart Placeholder
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl border bg-card text-card-foreground shadow-sm">
                            <h3 className="font-semibold text-xl mb-4">User Activity</h3>
                            <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center text-muted-foreground">
                                Chart Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer
                brand={{
                    name: 'Simplu',
                    description: 'Simplu este un sistem de management cu un agent AI de ultimă generație care se află deasupra infrastructurii și este capabil să preia toate sarcinile tale zilnice.'
                }}
                socialLinks={[
                    { name: 'X', href: 'https://twitter.com/simplu' },
                    { name: 'LinkedIn', href: 'https://linkedin.com/company/simplu' }
                ]}
                columns={[
                    {
                        title: "Produs",
                        links: [
                            { name: "Funcționalități", Icon: Settings, href: "#features" },
                            { name: "Prețuri", Icon: FileText, href: "#pricing" },
                            { name: "Integrări", Icon: Settings, href: "#integrations" },
                            { name: "API", Icon: Settings, href: "#api" }
                        ]
                    },
                    {
                        title: "Companie",
                        links: [
                            { name: "Despre", Icon: Users, href: "#about" },
                            { name: "Blog", Icon: FileText, href: "#blog" },
                            { name: "Cariere", Icon: Users, href: "#careers" },
                            { name: "Contact", Icon: Mail, href: "#contact" }
                        ]
                    },
                    {
                        title: "Suport",
                        links: [
                            { name: "Centru de Ajutor", Icon: HelpCircle, href: "#help" },
                            { name: "Documentație", Icon: FileText, href: "#docs" },
                            { name: "Status", Icon: Settings, href: "#status" },
                            { name: "Contactează-ne", Icon: Mail, href: "#contact" }
                        ]
                    }
                ]}
                copyright="© 2025 Simplu. Toate drepturile rezervate."
            />
        </div>
    );
};

export default ReportingPage;
