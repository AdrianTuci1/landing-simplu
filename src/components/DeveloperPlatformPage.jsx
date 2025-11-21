import React from 'react';
import { Footer } from '@/components/blocks/footer';
import { Mail, FileText, Users, Settings, HelpCircle, Code, Terminal, Cpu } from "lucide-react";

const DeveloperPlatformPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-grow pt-24 px-6">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                        Developer Platform
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mb-12">
                        Build powerful applications and integrations on top of Simplu.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                            <Code className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-semibold text-lg mb-2">API Reference</h3>
                            <p className="text-sm text-muted-foreground">Comprehensive documentation for our REST and GraphQL APIs.</p>
                        </div>
                        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                            <Terminal className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-semibold text-lg mb-2">SDKs & Tools</h3>
                            <p className="text-sm text-muted-foreground">Libraries and CLI tools to speed up your development.</p>
                        </div>
                        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                            <Cpu className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Webhooks</h3>
                            <p className="text-sm text-muted-foreground">Real-time event notifications for your applications.</p>
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

export default DeveloperPlatformPage;
