package es.danielcr86.simpleStore;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

@Entity
public class Shipment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@NotNull
	private String name;
	@OneToMany(cascade = CascadeType.MERGE, fetch=FetchType.EAGER)
	private List<Item> items = new ArrayList<Item>();

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String toString() {
		String teamString = "Shipment " + id + ": " + name + "\n";
		teamString += "number of items: " + this.getItems().size() + "\n";
		teamString += "items:\n";
		for (Item item : items) {
			teamString += "  " + item + "\n";
		}
		return teamString;
	}
}
