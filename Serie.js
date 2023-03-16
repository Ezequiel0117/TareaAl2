class Calculadora{
    limpiar(){
        let d=document
        d.getElementById('resp').textContent=""
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
    }
    sumaperfecto(){
        let suma=0
        let num=document.getElementById("num1"),perfecto=[]
        let arreglo=num.value
        let num1=arreglo.split(",")
        for(let i=0;i<num1.length;i++){ 
            let acud=0
            for(let divisor=1;divisor<num1[i];divisor++){
                if (num1[i] % divisor == 0){
                    acud=acud+divisor
                }
            } 
            if (acud==num1[i]){
                suma=suma+acud 
                perfecto.push(num1[i])
            }
        }
        document.getElementById("resp").textContent=`[${num1}]\nla suma entre los numeros perfectos [${perfecto}] es = ${suma}`  
    }
    numprimos(){
        let d=document
        let num= document.getElementById("num1"),primo=[] 
        let arreglo=num.value
        let num1=arreglo.split(",")
        for(let i=0;i<num1.length;i++){
            let divisor=2
            let band=1
            while(divisor < num1[i] && band == 1){
                if (num1[i] % divisor == 0){
                    // bandera
                    band=0
                }else{
                    divisor=divisor+1
                }
            }
            if (band==1){
                primo.push(num1[i])
            }
        } 
        d.getElementById("resp").textContent=`Del los valores : [${num1}] los numeros: (${primo}) son numeros primos`
    }
    expo(num1,num2){
        let base=num1**num2
        return base
    }
    serieexponente(){
        let $imput=document.getElementById("num1"),expos=[]
        let arreglo=$imput.value
        let num=arreglo.split(",")
        for(let i=0;i<num.length;i++){
            let s=this.expo(num[i],num[i])
            expos.push(s)
        }
        document.getElementById("resp").textContent=`La serie de numeros : [${num}] a su propio exponente es = [${expos}]`
    }
    bpexponente(){
        let d=document
        let num1=parseInt(d.getElementById("num1").value)
        let num2=parseInt(d.getElementById("num2").value)
        let s=this.expo(num1,num2)
        d.getElementById("resp").textContent=`El numero ${num1} elevado a su exponente ${num2} es = ${s}`
    }
    multi(num1,num2){
        let multi=num1*num2
        return multi
    }
    tabla12(){
        let tabla = parseInt(document.getElementById("num1").value),tablas=tabla
        for (let i = 1; i <= 12; i++) {
            let multi=this.multi(tabla,i)
          tablas += ` ${tabla} x ${i} = ${multi}`;
        }
        document.getElementById('resp').textContent = tablas;

    }
    divi(num1,num2){
        let divisor=[]
        for(let i =num2;i<num1;i++ ){
            if(num1 % i==0){
                divisor.push(i)
            }
        }
        return divisor
    }
    sumadivi(){
        let num1=parseInt(document.getElementById("num1").value),acu=0
        let num2=parseInt(document.getElementById("num2").value)
        let h=this.divi(num1,num2)
        for(let i=0;i<h.length;i++){
            acu=acu+h[i]
        }
        document.getElementById("resp").textContent=`La suma entre los divisores de ${num1} que son: [${h}] : ${acu}`
    }
    divisores(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        let h=this.divi(num1,num2)
        document.getElementById("resp").textContent=`los divisores de ${num1} son= [${h}]`
    }
    invertir(num){
        let digito=0,invertido=[]
        while(num > 0){
            digito = num % 10;
            num = Math.floor(num / 10);
            invertido.push(digito)
        }
        return invertido
    }
    pares(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num),pares=[]
        for(let i=0;i<numI.length;i++){
            if(numI[i]%2==0){
                pares.push(numI[i])
            }
        }
        document.getElementById("resp").textContent=`Los digitos pares de este numero son= ${pares}`
    }
    invnum(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num)
        document.getElementById("resp").textContent=`[${numI}]`
    }
    sumdigi(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num),acu=0
        for(let i=0;i<numI.length;i++){
            acu=acu+numI[i]
        }
        document.getElementById("resp").textContent=`La suma de los digitos de este numero es= ${acu}`
    }
    pdigito(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num)
        let primero=numI[numI.length-1]
        document.getElementById("resp").textContent=`El primer digito de esta serie de numeros es: ${primero}`
    }
    udigito(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num)
        let ultimo=numI[0]
        document.getElementById("resp").textContent=`El ultimo digito de esta serie de numeros es: ${ultimo}`
    }
    series(a,n){
        let arreglo=[]
        while(a< n){
            arreglo.push(a)
            a=a+1
        }
        return arreglo
    }
    serie(){
        let a=parseInt(document.getElementById("num1").value)
        let n=parseInt(document.getElementById("num2").value)
        let serie=this.series(a,n)
        
        document.getElementById("resp").textContent=`[${serie}]`
    }
    fac(num){
        let c=1,acu=num
        while(num > c){
            num=num-1
            acu=acu*num
        }
        return acu
    }
    factorial(){
        let num1=parseInt(document.getElementById("num1").value)
        let num=this.fac(num1)
        document.getElementById("resp").textContent=`El factorial de ${num1} es: ${num}`
    }
    factorialdenum(){
        let num=document.getElementById("num1"),factoriales=[]
        let arreglo=num.value
        let num1=arreglo.split(",")
        for(let i=0;i<num1.length;i++){
            let num=this.fac(num1[i])
            factoriales.push(num)
        }
        document.getElementById("resp").textContent=`El factorial de esta serie de numeros [${num1}] es: [${factoriales}]`
    }
}
let cal = new Calculadora() 