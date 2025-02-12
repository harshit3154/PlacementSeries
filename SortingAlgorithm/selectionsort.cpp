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
    cout<<"\n\n\n\t\t\tThe element of the array are\n\n\n\t\t\t\t:";
    for(int i=0;i<l;i++){
        cout<<"\t"<<ar[i];
    }
}
void insertionSort(int ar[],int l){
    display(ar,l);
    for(int i=1;i<l;i++){
        int key=ar[i];
        int j=i-1;
        bool swapped=false;
        while(j>=0 && ar[j]>key){
            ar[j+1]=ar[j];
            swapped=true;
            j--;
        }
        if(!swapped) break;
        ar[j+1]=key;
    }
    display(ar,l);
}

int main(){
    int ar[]={1,8,4,9,5,3,6,7};
    insertionSort(ar,sizeof(ar)/sizeof(ar[0]));
    return 0;
}