#include <iostream>

using namespace std;

/*
     * best case time complexity: O(n)
     * average case time complexity : O(n^2)
     * worst case time complexity : O(n^2)
     * 
     * space complexity : O(1)
     */

void display(int ar[],int l){
    cout<<"\n\n\t\tThe element of the array are\n\n\t\t\t: ";
    for(int i=0;i<l;i++){
        cout<<ar[i]<<"\t";
    }
}
int main(){
    int ar[]={4,5,8,6,9,7,1,2,3,4,7};
    int l=sizeof(ar)/sizeof(ar[0]),count=1;
    display(ar,l);
    for(int i=0;i<l;i++){
        bool swapped=false;
        for(int j=0;j<l-i-1;j++){
            if(ar[j]>ar[j+1]){
                ar[j]=ar[j]+ar[j+1];
                ar[j+1]=ar[j]-ar[j+1];
                ar[j]=ar[j]-ar[j+1];
                swapped=true;
            }
            cout<<"\n\n\t\tThe element of the array at "<<count++<<" iteration are : ";
            for(auto it:ar){
                cout<<it<<"\t";
            }
        }
        if(!swapped) break;
    }
}