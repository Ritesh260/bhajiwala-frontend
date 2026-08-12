useEffect(() => {
  console.log("🔥 ProductsGrid mounted");

  const fetchProducts = async () => {
    try {
      console.log(
        "🔥 Fetching products from:",
        process.env.NEXT_PUBLIC_API_URL
      );

      setLoading(true);
      setError("");

      const data = await getProducts();

      console.log("🔥 Products API response:", data);

      setProducts(data.products || []);
    } catch (error) {
      console.error("🔥 Products fetch error:", error);
      setError(error.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);