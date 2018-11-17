package es.danielcr86.simpleStore;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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

}