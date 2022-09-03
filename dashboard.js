function append(){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    let container=document.getElementById('container');
    container.innerHTML=null;
    data.forEach(function (el,index)  {
        let div=document.createElement('div');
        let img=document.createElement('img');
        img.src=el.image;
        let p=document.createElement('p');
        p.innerText=el.name;
        let p1=document.createElement('p');
        p1.innerText=el.course;
        let p2=document.createElement('p');
        p2.innerText=el.unit;
        let p3=document.createElement('p');
        p3.innerText=el.batch;

        let btn=document.createElement('button')
        btn.innerText='REMOVE';
        btn.addEventListener('click',function(){
            remove(index)
        })

        div.append(img,p,p1,p2,p3,btn)
        container.append(div)
    })
}

append();

function remove(index){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    let newData = data.filter(function (el, i){
        if(i == index) {
           let trash= JSON.parse(localStorage.getItem('trash')) ||[]
           trash.push(el);
           localStorage.setItem('trash',JSON.stringify(trash));
        }
        else {
                return i !== index;
        }
    })

    localStorage.setItem('students',JSON.stringify(newData));
    append();
    // let newData=data.filter(function (el, i) {

    //     if(i == index){
    //          let trash = JSON.parse(localStorage.getItem("trash"))
    //          trash.push(el)
    //          localStorage.setItem("trash",JSON.stringify(trash));
    //     }
    //     else{
    //         return i !== index;
    //     }
    // })

    // localStorage.setItem('student',JSON.stringify(newData));
    // append();
}