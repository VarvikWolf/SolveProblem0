let posl = []
let posl1 = [];
let posl2 = [];
let posl3 = [];

n = 5
let left = 1;

let count =0;
  
let multiple = 100
const str = 'Яблоко хочет быть продажной тварью'
    
 posl = str.split(' ')

for(let i = 0; i < n; i++)
    {
       // posl[i] = Math.round((Math.random() * (1 - -1) -1 )* multiple) / multiple
        //posl[i] = Math.complex(Math.floor(Math.random() * (20, - 10) - 10), (Math.random() * (20, - 10) - 10));  
        posl1[i] = posl[i]
        posl2[i] = posl[i]
        posl3[i] = posl[i]
    } 

    // shake
let right = n - 1; 
   
console.log(posl)

while ( left <= right)
    {
        count +=1;
        for (let i = left; i <= right; i++)
            {
                if ( posl[i-1] > posl[i])
                    {
                        [posl[i-1], posl[i]] = [posl[i], posl[i-1]];
                    }
            }
right -= 1
            for (let i = right; i >= left; i--)
            {
                if ( posl[i-1] > posl[i])
                    {
                        
                        count +=1;
                        [posl[i-1], posl[i]] = [posl[i], posl[i-1]];
                    }
            } 
            left +=1
    }

    console.log(posl,count)
    // ческа
    let op = 1.247
    count = 0
    let gapf = n / op;

while (gapf > 1) {
  
     let gap = Math.round(gapf);

    for (let i = 0, j = gap; j < n; i++, j++) {
 
        if (posl1[i] > posl1[j]) {
            count +=1;
            [posl1[i], posl1[j]] = [posl1[j], posl1[i]];
        }
    }

    gapf  = gapf / op;
}
console.log(posl1,count)
// include
count = 0

start = 1
let k = posl2[1]
for (let i = start; i < n; i++)
 {
    j = i - 1
    k = posl2[i]
 
     while (posl2[j] > k && j >=0)
      {
        count +=1 
        posl2[j+1] = posl2[j]
        j -=1
        posl2[j+1] = k
      }
    
   

   
 }

 console.log(posl2,count)

 //shell
count = 0
for (let g = Math.floor(n/2); g > 0; g = Math.floor(g/2))
{
  
   
    for (let i = g; i < n; i += 1)
    {
      
     
        let temp = posl3[i];

        let j;
        for (j = i; j >= g && posl3[j - g] > temp; j -= g)

        {
            count+=1
        posl3[j] = posl3[j - g];
        }
       
        posl3[j] = temp;
    }
}
        console.log(posl3,count)