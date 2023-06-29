<Routes>
  <Route path="/" element={<Layout />}>
    <Route path="/linkpage" element={<LinkPage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="/home" element={<Home />} />
    <Route element={<Auth allowedRoles={["marketer"]} />}>
      <Route path="/marketers-only" element={<MarketersPage />} />
    </Route>
    <Route element={<Auth allowedRoles={["se"]} />}>
      <Route path="/se-only" element={<SEPage />} />
    </Route>
    <Route element={<Auth allowedRoles={["se"]} />}>
      <Route path="/hr-Only" element={<HRPage />} />
    </Route>
  </Route>
</Routes>;