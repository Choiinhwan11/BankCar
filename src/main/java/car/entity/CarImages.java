package car.entity;

import booking.dto.BookingDTO;
import booking.entity.BookingEntity;
import lombok.Data;
import wishList.entity.WishListEntity;

import javax.persistence.*;

@Entity
@Data
@Table(name = "CAR_IMAGE")
public class CarImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long carImageId;

    @OneToOne(mappedBy = "carImages")
    private Car car;

    @Column
    private String image1;
    @Column
    private String image2;
    @Column
    private String image3;
    @Column
    private String image4;
    @Column
    private String main_image;

    @JoinColumn
    @OneToOne(fetch = FetchType.LAZY)
    private WishListEntity wishListEntity;


    @JoinColumn(name="booking_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private BookingEntity bookingEntity;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="serivcecar_id")
    private ServiceCar serviceCar;


//    public void setImage (String carservice){
//        BookingDTO bookingDTO =new BookingDTO();
//        String baseUrl = "https://kr.object.ncloudstorage.com/bitcamp-6th-bucket-102/booking/";
//        String imageName = getLoginDTO().getImage_file_name();
//        String imageUrl = baseUrl + imageName;
//        bookingDTO.setImageUrl(imageUrl);
//    }

}

