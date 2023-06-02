import React from 'react'
export interface type{
    label:string,
    href:string,
    isDropDown:boolean,
    isDropDownData?:any
}
export  const Arraynavbar:Array<type> = 
  [
    {
        label:"Female",
        href:"/female",
        isDropDown:true,
        isDropDownData:[{
            label:"Sweatshirt",
            href:"/femlae/sweatshirt",
            isDropDown:false,
            
    
        },
        {
            label:"Dress",
            href:"/female/dress",
            isDropDown:false,
            
    
        },
        {
            label:"Pants",
            href:"/female/pants",
            isDropDown:false,
            
    
        },
        {
            label:"Jacket",
            href:"/female/jacket",
            isDropDown:false,
            
    
        },
        {
            label:"Bomber",
            href:"/female/bomber",
            isDropDown:false,
            
    
        },
        

      ]
    
        

    },
    {
        label:"Male",
        href:"/male",
        isDropDown:true,
        isDropDownData:[{
            label:"Sweatshirt",
            href:"/male/sweatshirt",
            isDropDown:false,
            
    
        },
        {
            label:"Dress",
            href:"/male/dresss",
            isDropDown:false,
            
    
        },
        {
            label:"Trouser",
            href:"/male/trouser",
            isDropDown:false,
            
    
        },
        {
            label:"Bomber",
            href:"/male/bomber",
            isDropDown:false,
            
    
        },
        {
            label:"Jacket",
            href:"/male/jacket",
            isDropDown:false,
            
    
        }
        
      ]
        

    },
    {
        label:"Kid",
        href:"/kid",
        isDropDown:true,
        isDropDownData:[{
            label:"Sweatshirt",
            href:"/kid/Sweatshirt",
            isDropDown:false,
            
    
        },
        {
            label:"Dress",
            href:"/kid/Dress",
            isDropDown:false,
            
    
        },
        {
            label:"Trouser",
            href:"/kid/Trouser",
            isDropDown:false,
            
    
        }
      ]
        

    },
    {
        label:"All Product",
        href:"/all Product",
        isDropDown:false,

        

    }
  ]



