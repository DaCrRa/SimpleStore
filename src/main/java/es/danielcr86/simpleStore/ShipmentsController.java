package es.danielcr86.simpleStore;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ShipmentsController {

	@Autowired
	ShipmentRepository shipmentRepository;

	@Autowired
	ItemRepository itemRepository;

	@PostConstruct
	public void init() {
		// So far empty
	}

	@GetMapping("/")
	public String listShipments(Model model) {
		model.addAttribute("shipments", shipmentRepository.findAll());
		return "shipment_list";
	}

	@GetMapping("/shipment/{id}")
	public String showShipment(Model model, @PathVariable Long id) {
		Shipment shipmentToShow = shipmentRepository.findById(id).get();
		model.addAttribute("shipment", shipmentToShow);
		return "shipment_detail";
	}

	@GetMapping("/edit/shipment/{id}")
	public String showEditShipmentForm(Model model, @PathVariable Long id) {
		Shipment shipmentToShow = shipmentRepository.findById(id).get();
		model.addAttribute("shipment", shipmentToShow);
		return "edit_shipment";
	}

	@PostMapping("/shipment")
	public String saveShipment(Model model, @ModelAttribute("shipment") Shipment shipment) {
		List<Item> savedItems = itemRepository.saveAll(shipment.getItems());
		shipment.setItems(savedItems);
		shipment = shipmentRepository.save(shipment);
		return "shipment_detail";
	}

	@DeleteMapping("/shipment/{id}")
	@ResponseBody
	public void deleteShipment(@PathVariable Long id) {
		Shipment toBeDeleted =shipmentRepository.getOne(id);
		shipmentRepository.delete(toBeDeleted);
		itemRepository.deleteAll(toBeDeleted.getItems());
	}
}