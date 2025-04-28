export const BillingPortal: React.FC = () => {
    const handleManageBilling = async () => {
      try {
        const response = await fetch("/api/billing/portal");
        const { url } = await response.json();
        window.location.href = url;
      } catch (error) {
        console.error("Billing portal error", error);
      }
    };
  
    return (
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">Manage Your Subscription</h2>
        <button
          onClick={handleManageBilling}
          className="bg-blue-700 text-white p-2 rounded"
        >
          Open Billing Portal
        </button>
      </div>
    );
  };
  