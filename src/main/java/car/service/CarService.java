package car.service;

import car.entity.Car;
import car.entity.CarImages;
import car.entity.ServiceCar;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CarService {
    Car saveCar(Car car);

    void saveCarImages(CarImages carImages, List<String> carImagesUUID);

    ServiceCar saveServiceCar(ServiceCar serviceCar);

    Car findCarById(Long carId);

    List<Car> getCarsByUserId(String userId);

    CarImages getCarImagesByCarId(Long carId);

    List<Object[]> getCarData();


}
