 var Images = ["https://tse1.mm.bing.net/th?id=OIP.rEj5KL0Q56YteaT68Gu-0wHaHa&pid=Api&P=0&w=300&h=300",
 "https://tse4.mm.bing.net/th?id=OIP.YnLro65btmSn5yX6an5TawHaGl&pid=Api&P=0&w=184&h=165",
 "https://tse2.mm.bing.net/th?id=OIP.bLfLP5xwyqow4s05fYH2CwHaNa&pid=Api&P=0&w=300&h=300",
 "https://tse1.mm.bing.net/th?id=OIP.SN7-f8MC-iAoc3BPiLVWVQHaKJ&pid=Api&P=0&w=300&h=300" ,
  "https://clipground.com/images/clip-art-sister-7.jpg",
   "https://www.vector-eps.com/wp-content/gallery/scottish-terrier-puppy-cartoon-dog-vector/scottish-terrier-puppy-cartoon-dog-vector2.jpg"];
   
   var names = ["Fmaily Book","Dad", "Mom", "Brother", "Sister", "Dog"];
   
   var i = 0;
    function update() { 
        i++; 
        var numbers_of_family_member_in_array = 5; 
        if(i > numbers_of_family_member_in_array ) 
        { 
            i = 0; 
        } 
        var updatedImages = Images[i]; 
        var updatednames = names[i]; 
        document.getElementById("family_member_img").src = updatedImages; 
        document.getElementById("family_member_name").innerHTML = updatednames; 
    }
