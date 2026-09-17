import { ArrowRight, Download, Pencil, Plus, ShieldCheck, Trash2, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { AUTH_KEY, formatPrice, seedProducts } from "@/lib/constants";
import { AdminLogin } from "@/pages/AdminLogin";

const emptyProduct = {
  id: "",
  name: "",
  category: "Outerwear",
  price: 0,
  size: "",
  condition: "Excellent",
  badge: "New drop",
  description: "",
  image: "",
};

export function AdminPage({ products, setProducts }) {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(AUTH_KEY) === "true");
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyProduct);
  const fileRef = useRef(null);

  if (!unlocked) return <AdminLogin onUnlock={() => setUnlocked(true)} />;

  const startNew = () => {
    setEditing(null);
    setForm({ ...emptyProduct, id: `ctk-${Date.now()}` });
    setShowForm(true);
  };

  const startEdit = (product) => {
    setEditing(product);
    setForm(product);
    setShowForm(true);
  };

  const saveProduct = (event) => {
    event.preventDefault();
    const next = { ...form, price: Number(form.price) || 0, image: form.image || seedProducts[0].image };
    setProducts((current) =>
      editing ? current.map((product) => (product.id === editing.id ? next : product)) : [next, ...current]
    );
    setShowForm(false);
  };

  const deleteProduct = (id) => {
    if (window.confirm("Remove this piece from the current drop?")) {
      setProducts((current) => current.filter((product) => product.id !== id));
    }
  };

  const onFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((current) => ({ ...current, image: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const downloadCatalog = () => {
    const blob = new Blob([JSON.stringify(products, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "ctk-catalog-backup.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const importCatalog = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (Array.isArray(parsed)) setProducts(parsed);
      } catch {
        window.alert("Please choose a valid catalog JSON backup.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <section className="min-h-screen bg-[#f2eee5] py-10 sm:py-16">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brass">J.S.K / management</p>
            <h1 className="mt-3 font-display text-5xl font-semibold uppercase tracking-[-0.06em] text-ink sm:text-7xl">
              Current
              <br />
              <span className="italic text-brass">rail.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={downloadCatalog}
              className="inline-flex items-center gap-2 border border-ink/25 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/65 hover:border-brass hover:text-ink">
              <Download size={14} /> Export backup
            </button>
            <label className="inline-flex cursor-pointer items-center gap-2 border border-ink/25 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/65 hover:border-brass hover:text-ink">
              <Upload size={14} /> Import backup
              <input type="file" accept="application/json" className="hidden" onChange={importCatalog} />
            </label>
            <button
              onClick={startNew}
              className="inline-flex items-center gap-2 bg-ink px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-cream hover:bg-brass hover:text-ink">
              <Plus size={14} /> Add product
            </button>
          </div>
        </div>

        <div className="my-8 grid gap-4 sm:grid-cols-3">
          <div className="bg-ink p-5 text-cream">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-cream/45">
              Live pieces
            </p>
            <p className="mt-2 font-display text-4xl text-brass">{products.length}</p>
          </div>
          <div className="bg-white p-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
              Storage
            </p>
            <p className="mt-2 font-display text-2xl text-ink">This browser</p>
          </div>
          <div className="bg-brass p-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/55">
              Important
            </p>
            <p className="mt-2 font-body text-sm leading-5 text-ink/70">
              Export before changing devices or deploying.
            </p>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="eyebrow text-ink/45">Inventory / {products.length} items</p>
          <button
            onClick={() => {
              sessionStorage.removeItem(AUTH_KEY);
              setUnlocked(false);
            }}
            className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45 hover:text-ink">
            Lock panel
          </button>
        </div>

        <div className="overflow-hidden border border-ink/15 bg-white">
          <div className="hidden grid-cols-[72px_1.6fr_0.7fr_0.6fr_0.7fr_100px] gap-4 border-b border-ink/10 bg-ink px-5 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-cream/60 sm:grid">
            <span>Image</span>
            <span>Piece</span>
            <span>Category</span>
            <span>Size</span>
            <span>Price</span>
            <span>Actions</span>
          </div>
          {products.map((product) => (
            <div
              key={product.id}
              className="grid gap-4 border-b border-ink/10 p-4 last:border-0 sm:grid-cols-[72px_1.6fr_0.7fr_0.6fr_0.7fr_100px] sm:items-center sm:px-5">
              <img src={product.image} alt="" className="h-16 w-16 object-cover" />
              <div>
                <p className="font-body text-sm font-medium text-ink">{product.name}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-ink/40">
                  {product.condition} &middot; {product.badge}
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/55">
                {product.category}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/55">
                {product.size}
              </p>
              <p className="font-display text-lg text-ink">{formatPrice(product.price)}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(product)}
                  className="grid h-8 w-8 place-items-center border border-ink/15 text-ink/55 hover:border-brass hover:text-ink"
                  aria-label={`Edit ${product.name}`}>
                  <Pencil size={14} />
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="grid h-8 w-8 place-items-center border border-ink/15 text-ink/55 hover:border-red-400 hover:text-red-700"
                  aria-label={`Delete ${product.name}`}>
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-2 border-l-2 border-brass bg-brass/10 p-4">
          <ShieldCheck size={17} className="mt-0.5 shrink-0 text-brass" />
          <p className="font-body text-xs leading-5 text-ink/60">
            <strong className="text-ink">No-backend note:</strong> edits are saved permanently in
            this browser via localStorage. Use <strong className="text-ink">Export backup</strong>{" "}
            to carry your catalog to another browser or preserve uploaded images before a future
            backend migration.
          </p>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/70 p-4 backdrop-blur-sm">
          <div className="mx-auto my-8 max-w-2xl bg-cream p-6 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between border-b border-ink/15 pb-5">
              <div>
                <p className="eyebrow text-brass">{editing ? "Edit piece" : "New piece"}</p>
                <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-[-0.06em] text-ink">
                  Add to the rail.
                </h2>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="grid h-9 w-9 place-items-center border border-ink/15 text-ink/55">
                <X size={17} />
              </button>
            </div>
            <form onSubmit={saveProduct} className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="field-label">Product name</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="field-input"
                  placeholder="e.g. Vintage varsity jacket"
                />
              </label>
              <label>
                <span className="field-label">Category</span>
                <select
                  value={form.category}
                  onChange={(event) => setForm({ ...form, category: event.target.value })}
                  className="field-input">
                  <option>Outerwear</option>
                  <option>Tops</option>
                  <option>Denim</option>
                  <option>Bottoms</option>
                  <option>Accessories</option>
                </select>
              </label>
              <label>
                <span className="field-label">Price (&#8358;)</span>
                <input
                  required
                  type="number"
                  min="0"
                  value={form.price || ""}
                  onChange={(event) => setForm({ ...form, price: Number(event.target.value) })}
                  className="field-input"
                  placeholder="45000"
                />
              </label>
              <label>
                <span className="field-label">Size</span>
                <input
                  value={form.size}
                  onChange={(event) => setForm({ ...form, size: event.target.value })}
                  className="field-input"
                  placeholder="M / 32 / One size"
                />
              </label>
              <label>
                <span className="field-label">Condition</span>
                <select
                  value={form.condition}
                  onChange={(event) => setForm({ ...form, condition: event.target.value })}
                  className="field-input">
                  <option>Excellent</option>
                  <option>Very good</option>
                  <option>Good</option>
                  <option>As-is</option>
                </select>
              </label>
              <label>
                <span className="field-label">Badge</span>
                <input
                  value={form.badge}
                  onChange={(event) => setForm({ ...form, badge: event.target.value })}
                  className="field-input"
                  placeholder="Just in"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="field-label">Description</span>
                <textarea
                  required
                  rows={3}
                  value={form.description}
                  onChange={(event) => setForm({ ...form, description: event.target.value })}
                  className="field-input resize-none"
                  placeholder="Tell the story of this piece..."
                />
              </label>
              <div className="sm:col-span-2">
                <span className="field-label">Product image</span>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="inline-flex items-center justify-center gap-2 border border-ink/20 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-ink/65 hover:border-brass hover:text-ink">
                    <Upload size={14} /> Upload image
                  </button>
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFileChange} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/40">
                    or paste a permanent image URL below
                  </span>
                </div>
                <input
                  value={form.image.startsWith("data:") ? "Image uploaded from this device" : form.image}
                  onChange={(event) => setForm({ ...form, image: event.target.value })}
                  disabled={form.image.startsWith("data:")}
                  className="field-input mt-3"
                  placeholder="https://..."
                />
                {form.image && <img src={form.image} alt="Preview" className="mt-3 h-28 w-24 object-cover" />}
              </div>
              <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-ink px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cream hover:bg-brass hover:text-ink">
                {editing ? "Save changes" : "Add to current drop"} <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
