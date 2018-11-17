package es.danielcr86.simpleStore;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ShipmentsController {

	@Autowired
	ShipmentRepository shipmentRepository;

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

}