import React from "react";

//compoenents
import PostList from "components/PostList/PostList";

function App() {
  return (
    <div data-testid="app" className="container mx-auto">
      <PostList />
    </div>
  );
}

export default App;
