import AuditForm from '@/components/AuditForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Connect With Our Technical Team</h1>
        <p className="text-sm text-[#A1A1AA]">
          Ready to patch your system visibility dropouts? Book a manual roadmap audit below.
        </p>
      </div>

      {/* Dropping your newly fixed, error-free form right here */}
      <div className="pb-24">
        <AuditForm />
      </div>
    </div>
  );
}