import { CustomAlert } from "@/components/ui/custom-alert";

export default function Index() {
  const message = "Hey you. Can you get me some pizza please? I am craving for a nice slice of pepperoni. Thank and will see you soon.";
  
  return (
    <div className="p-4 space-y-4 max-w-2xl mx-auto">
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
  );
}