export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-shell d-flex align-items-center justify-content-center min-vh-100 py-4 px-3">
      <div style={{ maxWidth: "420px", width: "100%" }}>{children}</div>
    </div>
  );
}
