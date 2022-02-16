const INITIAL_STATE = {
	sections: [
  {
    title: "Nike",
    imageUrl: "https://product.hstatic.net/1000282067/product/dykvcj_wwac96ro_186a47b6c5354d2bab9713dfb797117f.jpg",
    id: 1,
    linkUrl: "shop/nike",
  },
  {
    title: "Adidas",
    imageUrl: "http://cdn.cnn.com/cnnnext/dam/assets/210615101036-01-lego-adidas-sneaker-scli-intl.jpg",
    id: 2,
    linkUrl: "shop/adidas",
  },
  {
    title: "Puma",
    imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVtYSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    id: 3,
    linkUrl: "shop/puma",
  },
  {
    title: "Womens",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbuQ_GFn-av9V7kUFwWuYTri0Q06RzrHdoA&usqp=CAU",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "Mens",
    imageUrl: "https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20097_SportyOutfits_Header.jpg",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
]
}

const directoryReducer = (state = INITIAL_STATE , action) => {
	switch(action.type){
		default:
		return state;
	}
}

export default directoryReducer;