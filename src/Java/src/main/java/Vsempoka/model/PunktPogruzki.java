package Vsempoka.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Vsempoka.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ПунктПогрузки
 */
@Entity(name = "IISVsempokaПунктПогрузки")
@Table(schema = "public", name = "ПунктПогрузки")
public class PunktPogruzki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаименППогр")
    private String наименппогр;

    @Column(name = "Адрес")
    private String адрес;


    public PunktPogruzki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименППогр() {
      return наименппогр;
    }

    public void setНаименППогр(String наименппогр) {
      this.наименппогр = наименппогр;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }


}