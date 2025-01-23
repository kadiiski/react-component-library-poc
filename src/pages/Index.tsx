import { CustomAlert } from "@/components/ui/custom-alert";
import { Rating } from "@/components/ui/rating";
import { ScrollTabs } from "@/components/ui/scroll-tabs";
import { Package } from "lucide-react";

export default function Index() {
  const message = "Hey you. Can you get me some pizza please? I am craving for a nice slice of pepperoni. Thank and will see you soon.";
  
  const tabItems = [
    { label: "item with a very long label" },
    { label: "item label", icon: <Package className="w-4 h-4" /> },
    { label: "item label" },
    { label: "item label" },
    { label: "item label long" },
    { label: "item label" },
    { label: "item label" },
    { label: "item label" },
    { label: "item label" },
    { label: "item label" },
  ];
  
  return (
    <div className="p-8 space-y-12">
      {/* Component Showcase Section */}
      <div className="max-w-4xl mx-auto">
        {/* Tabs Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tabs</h2>
          <div className="space-y-8">
            <ScrollTabs items={tabItems} />
            <ScrollTabs 
              items={[
                { label: "item label", icon: <Package className="w-4 h-4" /> },
                { label: "item label", icon: <Package className="w-4 h-4" /> },
                { label: "item label", icon: <Package className="w-4 h-4" /> },
              ]} 
            />
          </div>
        </section>

        {/* Alerts Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Alerts</h2>
          <div className="space-y-4">
            <CustomAlert 
              variant="success" 
              message={message}
            />
            <CustomAlert 
              variant="info" 
              message={message}
            />
            <CustomAlert 
              variant="warning" 
              message={message}
            />
          </div>
        </section>

        {/* Ratings Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ratings</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Rating 
              value={2}
              topLabel="Basic Rating"
              levelText="2 Stars"
              levelDescription="Basic rating example"
            />
            <Rating 
              value={3}
              topLabel="Three Stars"
              levelText="Good"
              levelDescription="Average rating example"
            />
            <Rating 
              value={4}
              topLabel="Four Stars"
              levelText="Great"
              levelDescription="Above average rating"
            />
            <Rating 
              value={5}
              topLabel="Five Stars"
              levelText="Excellent"
              levelDescription="Perfect rating example"
            />
          </div>
        </section>
      </div>
    </div>
  );
}