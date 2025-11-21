import { GitBranch, Zap, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Workflows = () => {
    const workflows = [
        {
            title: "Appointment Reminders",
            description: "Automatically send SMS and email reminders to reduce no-shows.",
            icon: Clock,
            steps: ["Trigger: 24h before appointment", "Action: Send SMS", "Action: Send Email", "Wait: 23h", "Condition: Confirmed?", "True: Notify Staff", "False: Send Follow-up"],
        },
        {
            title: "New Customer Onboarding",
            description: "Welcome new customers and guide them through your services.",
            icon: Zap,
            steps: ["Trigger: New Customer Created", "Action: Send Welcome Email", "Action: Create Task for Staff", "Wait: 3 days", "Action: Send 'How to' Guide"],
        },
        {
            title: "Review Collection",
            description: "Ask for feedback after a service is completed.",
            icon: CheckCircle2,
            steps: ["Trigger: Appointment Completed", "Wait: 2 hours", "Action: Send Review Request", "Condition: Review Received?", "True: Send Thank You", "False: Wait 3 days & Remind"],
        },
    ];

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Workflows
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Automate your business logic with our powerful visual workflow builder.
                        Save time and ensure consistency across all your operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {workflows.map((workflow, index) => (
                        <div key={index} className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <workflow.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{workflow.title}</h3>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-8">{workflow.description}</p>

                            <div className="flex-1 bg-muted/30 rounded-xl p-6 border border-border/50">
                                <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Workflow Steps</h4>
                                <div className="space-y-4">
                                    {workflow.steps.map((step, idx) => (
                                        <div key={idx} className="relative pl-6 border-l-2 border-border last:border-l-0">
                                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                                            <p className="text-sm font-medium">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-primary/5 rounded-3xl p-8 sm:p-16 text-center border border-primary/10">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to automate your business?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Start with our pre-built templates or create your own custom workflows from scratch.
                    </p>
                    <Button size="lg" className="gap-2">
                        Start Building <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Workflows;
