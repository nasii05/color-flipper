function changeColor(){
    let color= document.getElementById('color-input-text').value;
     document.body.style.background=color;
      const s=new Option().style;
      s.color=color;
      if(s.color=='') return alert("Enter valid color");
}



