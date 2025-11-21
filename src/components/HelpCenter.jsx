import { Search, Book, MessageCircle, FileQuestion, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HelpCenter = () => {
    const categories = [
        {
            title: "Getting Started",
            icon: Book,
            description: "Learn the basics of Simplu and how to set up your account.",
            articles: ["Account Setup", "Importing Data", "User Roles"],
        },
        {
            title: "Features & Tutorials",
            icon: FileQuestion,
            description: "Deep dive into specific features and how to use them.",
            articles: ["Calendar Management", "Customer Profiles", "Reporting"],
        },
        {
            title: "Billing & Subscription",
            icon: MessageCircle,
            description: "Manage your subscription, payments, and invoices.",
            articles: ["Update Payment Method", "View Invoices", "Upgrade Plan"],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Search Section */}
            <section className="bg-muted/30 py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        How can we help you?
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Search our knowledge base or browse categories below.
                    </p>
                    <div className="mt-8 relative max-w-xl mx-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search for articles..."
                            className="pl-10 py-6 text-lg bg-background shadow-sm"
                        />
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <category.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                                <p className="text-muted-foreground mb-6">{category.description}</p>
                                <ul className="space-y-3">
                                    {category.articles.map((article, idx) => (
                                        <li key={idx}>
                                            <a href="#" className="text-sm font-medium text-primary hover:underline flex items-center">
                                                {article}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-muted/30 border-t border-border">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
                    <p className="text-muted-foreground mb-8">
                        Our support team is available 24/7 to assist you with any questions.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="gap-2">
                            <Mail className="h-4 w-4" />
                            Contact Support
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2">
                            <MessageCircle className="h-4 w-4" />
                            Live Chat
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpCenter;
