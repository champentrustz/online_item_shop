const getItemAll = async() =>{
    const docRef = db.collection("itemMall");
    const queryRef = docRef.doc('grroleplay');
    const snapshot = await queryRef.get();

    // 2. ตรวจสอบว่ามีข้อมูลอยู่จริงไหม (ป้องกัน Error ถ้าหา document ไม่เจอ)
    if (snapshot.exists) {
        // 3. ใช้ Method .data() เพื่อแปลงเป็น JSON/Object
        const data = snapshot.data();
        return data;
    } else {

        return {};
    }

}